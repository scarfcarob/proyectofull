
import express from 'express';        
import authRoutes from './router/authRoutes.js';

import dotenv from 'dotenv';
dotenv.config();



// Importa las rutas
import usuarioRoutes from './router/usuariosRoutes.js';          
import canchasRoutes from './router/canchasRoutes.js';
import horarioRoutes from './router/horariosRoutes.js';
import reservaRoutes from './router/reservasRoutes.js';        
import pagoRoutes from './router/pagosRoutes.js';

const app = express();


// Middleware global
app.use(express.json());


// Rutas
app.use('/api/usuarios', usuarioRoutes);           
app.use('/api/canchas', canchasRoutes);
app.use('/api/horarios', horarioRoutes);
app.use('/api/reservas', reservaRoutes);        // ar.
app.use('/api/pagos', pagoRoutes);
app.use('/api/auth', authRoutes);          // ruta protegida
//app.use('/api/auth', authRoutes);



export default app;









