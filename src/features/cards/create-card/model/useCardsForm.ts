import { computed, reactive } from 'vue';
import { CardDocumentFormat, DocumentType, type ContractCardType, type CreateCardForm } from '@/entities/card';


interface FormState extends Omit<CreateCardForm, 'fileType'> {
  documentNumber: string
  startDate: string
  endDate: string
  file: File | null
}


export function useCardForm() {
  const form = reactive<FormState>({
    documentType: DocumentType.Contract,
    documentName: '',
    documentNumber: '',
    startDate: '',
    endDate: '',
    notifyOnEnd: false,
    createTaskOnEnd: false,
    file: null,
  });

  const isSubmitDisabled = computed(() => {
    return (
      !form.documentType ||
      !form.documentName.trim()
    )
  })

  function submit() {
    const card: CreateCardForm = {          
      documentType: form.documentType,
      documentName: form.documentName.trim(),
      documentNumber: form.documentNumber || null,
      startDate: form.startDate || null,
      endDate: form.endDate || null,
      notifyOnEnd: form.notifyOnEnd,
      createTaskOnEnd: form.createTaskOnEnd,
      fileType: form.file?.type as CardDocumentFormat || null
    };

    return card;
  }

  return { form, submit, isSubmitDisabled };
}
