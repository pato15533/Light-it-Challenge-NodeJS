import { AppDataSource } from '../db/data-source';
import { Patient } from '../db/entities/Patient';
import { EmailService } from './emailService';

export class PatientService {
  private emailService = new EmailService();

  public async createPatient(data: Partial<Patient>): Promise<Patient> {
    const patientRepository = AppDataSource.getRepository(Patient);

    const patient = patientRepository.create(data);
    const savedPatient = await patientRepository.save(patient);

    await this.emailService.sendConfirmationEmail(savedPatient.email);

    return savedPatient;
  }
}
