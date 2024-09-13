import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Import routes
import authRouter from './routes/acessoRoutes.js';
import userRouter from './routes/usuarioRoutes.js';
import serviceRouter from './routes/serviçoRoutes.js';
import donationRouter from './routes/doaçãoRoutes.js';
import volunteerRouter from './routes/atividadesRoutes.js';
import reviewRouter from './routes/avaliacaoRoutes.js';
import signUpRouter from './routes/cadastroRoutes.js';
import tutorValidationRouter from './routes/validacaoRoutes.js';
import networkRouter from './routes/redeRoutes.js';
import oportunityRouter from './routes/oportunidadeRoutes.js';
import reviewRequestRouter from './routes/notificaçãoRoutes.js';

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
app.use(`./api/auth`, authRouter);
app.use(`/api/services`, serviceRouter);
app.use(`/api/donations`, donationRouter);
app.use(`/api/volunteer`, volunteerRouter)
app.use(`/api/signUp`,signUpRouter);
app.use(`/api/tutorValidation`,tutorValidationRouter);
app.use(`/api/network`,networkRouter);
app.use(`/api/oportunity`,oportunityRouter);

// how to add user profile?
app.use(`/api/users`, userRouter);
app.use(`/api/user/reviews`,reviewRouter);
app.use(`/api/user/reviewRequest`,reviewRequestRouter);

//Connect database
sequelize.authenticate()
  .then(() => console.log('Connected to MySQL database'))
  .catch(error => console.error('Database connection error:', error));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
