import { AngularNodeAppEngine, createNodeRequestHandler, isMainModule, writeResponseToNodeResponse } from '@angular/ssr/node';
import type { V1SendRequest } from '@hostinger/mail-sdk';
import { Configuration, SendApi } from '@hostinger/mail-sdk';
import 'dotenv/config'; // só se for carregar um arquivo .env local
import express from 'express';
import { join } from 'node:path';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

app.use(express.json());

const mailboxResourceId = process.env['HOSTINGER_MAILBOX_RESOURCE_ID']!;

const sendApi = new SendApi(
  new Configuration({
    accessToken: process.env['HOSTINGER_MAIL_API_TOKEN']!,
  })
);

app.post('/api/send-email', async (req, res) => {
  const { nome, email, mensagem } = req.body ?? {};

  if (typeof nome !== 'string' || typeof email !== 'string' || typeof mensagem !== 'string') {
    return res.status(400).json({
      error: 'Informe nome, email e mensagem.',
    });
  }

  // const subject = `Contato pelo site: ${nome}`;
  // const text = `Nome: ${nome}\nEmail: ${email}\nMensagem:\n${mensagem}`;

  // if (typeof subject !== 'string' || typeof text !== 'string') {
  //   return res.status(400).json({
  //     error: 'Informe destinatário, assunto e conteúdo.',
  //   });
  // }

  type NewEmailRequest = Omit<V1SendRequest, 'forwardOf' | 'inReplyTo'>;

  const message: NewEmailRequest = {
    subject: 'Confirme seu endereço de email',
    text: 'Teste de Mensagem',
    to: [email.trim()],
    displayName: 'contato@morphus.id',
    cc: ['kalupaconsultoria@gmail.com'],
    bcc: [],
    html: '',
    attachments: [],
  };

  try {
    await sendApi.sendEmail(mailboxResourceId, message as V1SendRequest);
    return res.json({ ok: true });
  } catch (error: unknown) {
    const err = error as {
      message?: string;
      response?: {
        status?: number;
        data?: unknown;
      };
    };
    console.error('Mail API status:', err.response?.status ?? 'sem resposta HTTP');
    console.error('Mail API resposta:', err.response?.data);
    console.error('Erro:', err.message);
    console.error('Falha ao enviar email:', error instanceof Error ? error.message : 'erro desconhecido');
    return res.status(502).json({
      error: 'Não foi possível enviar o email.',
    });
  }
});

// Mantenha aqui o app.listen que seu servidor já usa.

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  })
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) => (response ? writeResponseToNodeResponse(response, res) : next()))
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
