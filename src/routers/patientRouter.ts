import { Router } from 'express';
import { PatientController } from '../controllers/patientController';

const patientRouter = Router();

const patientController = new PatientController();

patientRouter.post('/patient', async (req, res) => {
  await patientController.createPatient(req, res);
});

export { patientRouter };
