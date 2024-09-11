require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
//const router = express.Router();

// module.express = router;

// Importar rotas
const authRoutes = require('./routes/acessoRoutes');
const userRoutes = require('./routes/usuarioRoutes');
const serviceRoutes = require('./routes/serviçoRoutes');
const donationRoutes = require('./routes/doaçãoRoutes');
const volunteerRoutes = require("./routes/atividadesRoutes");
const reviewRoutes = require("./routes/avaliacaoRoutes");
const signUpRoutes = require("./routes/cadastroRoutes");
const tutorValidationRoutes = require("./routes/validacaoRoutes");
const networkRoutes = require("./routes/redeRoutes");
const oportunityRoutes = require("./routes/oportunidadeRoutes");
const reviewRequests = require("./routes/notificaçãoRoutes");

// newtork ? oportunity ? deve ser feito no back?
// review requests é necessário?

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/donations', donationRoutes);
app.use("/api/volunteer", volunteerRoutes)
app.use("/api/signUp",signUpRoutes);
app.use("/api/tutorValidation",tutorValidationRoutes);
app.use("/api/network",networkRoutes);
app.use("/api/oportunity",oportunityRoutes);

// how to add user profile?
app.use('/api/users', userRoutes);
app.use("/api/user/reviews",reviewRoutes);
app.use("/api/user/reviewRequest",reviewRequests);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
