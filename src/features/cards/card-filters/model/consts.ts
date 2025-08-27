import { CardDocumentFormat, ContractStatus, DocumentType } from "@/entities/card";

export const CARD_DOCUMENT_TYPE = [
  {label: 'не выбрано', value: ''},
  {label: 'pdf', value: CardDocumentFormat.PDF},
  {label: 'xlsx', value: CardDocumentFormat.DOC},
  {label: 'xlsx', value: CardDocumentFormat.XLS},
  {label: 'xlsx', value: CardDocumentFormat.JPG},
]

export const CARD_STATUS_OPTIONS = [
  {label: 'не выбрано', value: ''},
  { label: 'Заключен', value: ContractStatus.Active },
  { label: 'Расторгнут', value: ContractStatus.Ended }
];

export const CARD_SORT_OPTIONS = [
  {label: 'не выбрано', value: ''},
  {label: 'По дате', value: 'date'},
  {label: 'По имени', value: 'name'}
]

export type SortBy = typeof CARD_SORT_OPTIONS;