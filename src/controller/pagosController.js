

import Pago from '../model/pagos.js';

const PagoController = {
  async getAll(req, res) {
    try {
      const pagos = await Pago.getAll();
      res.json(pagos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener los pagos' });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const pago = await Pago.getById(id);
      if (!pago) return res.status(404).json({ error: 'Pago no encontrado' });
      res.json(pago);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener el pago' });
    }
  },

  async create(req, res) {
    try {
      const { reserva_id, monto, metodo_pago } = req.body;
      const id = await Pago.create({ reserva_id, monto, metodo_pago });
      res.status(201).json({ message: 'Pago creado correctamente', id });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear el pago' });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const actualizado = await Pago.update(id, req.body);
      if (!actualizado) return res.status(404).json({ error: 'Pago no encontrado' });
      res.json({ message: 'Pago actualizado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar el pago' });
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;
      const eliminado = await Pago.delete(id);
      if (!eliminado) return res.status(404).json({ error: 'Pago no encontrado' });
      res.json({ message: 'Pago eliminado correctamente' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar el pago' });
    }
  },
};

export default PagoController;
