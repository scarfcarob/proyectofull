
import Horario from '../model/horarios.js';

const HorarioController = {
  async getAll(req, res) {
    try {
      const horarios = await Horario.getAll();
      res.json(horarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los horarios' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const horario = await Horario.getById(id);
      if (!horario) return res.status(404).json({ error: 'Horario no encontrado' });
      res.json(horario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el horario' });
    }
  },

  async create(req, res) {
    try {
      const { cancha_id, dia, hora_inicio, hora_fin, disponible } = req.body;
      const id = await Horario.create({ cancha_id, dia, hora_inicio, hora_fin, disponible });
      res.status(201).json({ message: 'Horario creado correctamente', id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el horario' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const actualizado = await Horario.update(id, req.body);
      if (!actualizado) return res.status(404).json({ error: 'Horario no encontrado' });
      res.json({ message: 'Horario actualizado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el horario' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await Horario.delete(id);
      if (!eliminado) return res.status(404).json({ error: 'Horario no encontrado' });
      res.json({ message: 'Horario eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el horario' });
    }
  },
};

export default HorarioController;
