import Swal from 'sweetalert2';

const askForConfirmation = (question: string) =>
  Swal.fire({
    title: question,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sim',
    cancelButtonText: 'Não',
  });
export default askForConfirmation;
