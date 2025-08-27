import { DocumentType } from "@/entities/card";

export const DOCUMENT_TYPES = [
  { label: 'Договор', value: DocumentType.Contract },
  { label: 'Справка', value: DocumentType.Certificate },
  { label: 'Другое', value: DocumentType.Other },
];