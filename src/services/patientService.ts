import { AppDataSource } from '../db/data-source';
import { Patient } from '../db/entities/Patient';

export class PatientService {
  public async createPatient(data: Partial<Patient>): Promise<Patient> {
    const patientRepository = AppDataSource.getRepository(Patient);

    const patient = patientRepository.create(data);
    const savedPatient = await patientRepository.save(patient);

    return savedPatient;
  }
}
