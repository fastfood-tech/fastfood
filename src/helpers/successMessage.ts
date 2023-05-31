import Swal from 'sweetalert2';

const showSuccessMessage = () =>
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Tudo certo!',
    showConfirmButton: false,
    timer: 1500,
  });

export default showSuccessMessage;
