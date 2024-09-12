import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import routes
import authRoutes from './routes/acessoRoutes.js';
import userRoutes from './routes/usuarioRoutes.js';
import serviceRoutes from './routes/serviçoRoutes.js';
import donationRoutes from './routes/doaçãoRoutes.js';
import volunteerRoutes from './routes/atividadesRoutes.js';
import reviewRoutes from './routes/avaliacaoRoutes.js';
import signUpRoutes from './routes/cadastroRoutes.js';
import tutorValidationRoutes from './routes/validacaoRoutes.js';
import networkRoutes from './routes/redeRoutes.js';
import oportunityRoutes from './routes/oportunidadeRoutes.js';
import reviewRequests from './routes/notificaçãoRoutes.js';

dotenv.config();

const app = express();

// newtork ? oportunity ? deve ser feito no back?
// review requests é necessário?

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//importar database?

// Rotas
app.use(`./api/auth`, authRoutes);
app.use(`/api/services`, serviceRoutes);
app.use(`/api/donations`, donationRoutes);
app.use(`/api/volunteer`, volunteerRoutes)
app.use(`/api/signUp`,signUpRoutes);
app.use(`/api/tutorValidation`,tutorValidationRoutes);
app.use(`/api/network`,networkRoutes);
app.use(`/api/oportunity`,oportunityRoutes);

// how to add user profile?
app.use(`/api/users`, userRoutes);
app.use(`/api/user/reviews`,reviewRoutes);
app.use(`/api/user/reviewRequest`,reviewRequests);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
