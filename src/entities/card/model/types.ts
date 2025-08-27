export enum ContractStatus {
  Active = 'active',
  Ended = 'ended',
} 

export enum DocumentType {
    Contract = 'contract',
    Certificate = 'certificate',
    Other = 'other',
}

export enum CardDocumentFormat {
  XLS = 'application/vnd.ms-excel',
  PDF = 'application/pdf',
  JPG = 'image/jpeg',
  DOC = 'application/msword'
}

export interface ContractCardType {
  id: number
  status: ContractStatus | null
  documentType: DocumentType;
  documentName: string;
  documentNumber: string | null;
  startDate: string | null;
  endDate: string | null;
  notifyOnEnd: boolean;
  createTaskOnEnd: boolean;
  fileType: CardDocumentFormat | null;
}

export type CreateCardForm = Omit<ContractCardType, 'id' | 'status'>