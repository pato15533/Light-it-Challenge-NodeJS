import { Request, Response } from 'express';
import { validatePatientData } from '../validators/patientValidator';
import { PatientService } from '../services/patientService';

export class PatientController {
  private patientService = new PatientService();

  public async createPatient(req: Request, res: Response): Promise<Response> {
    const { body } = req;

    const result = validatePatientData(body);

    // Validation uses zod safeParse, so we can check if the result is successful
    if (result.success) {
      try {
        const savedPatient = await this.patientService.createPatient(body);

        return res.status(201).json({
          message: 'Patient created successfully',
          patient: savedPatient,
        });
      } catch (error) {
        console.error('Error creating patient:', error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    } else {
      // Return validation errors if validation fails
      return res.status(400).json({
        message: 'Bad Request: Body validation failed',
        errors: result.error,
      });
    }
  }
}
