import swal from 'sweetalert';

export default {
  methods: {
    alert(options) {
      swal(options);
    },
    alertSuccess(text = 'Данные успешно сохранены', title = 'Успешно', timer = 1700) {
      swal({
        title,
        text,
        icon: 'success',
        timer,
      });
    },
    alertError(text = 'Что-то пошло не так', timer = 3000) {
      swal({
        title: 'Ошибка',
        text,
        icon: 'error',
        timer,
      });
    },
    alertConfirm() {
      return swal({
        title: 'Подтверждение',
        text: 'Вы уверены что хотите выполнить данное действие?',
        icon: 'warning',
        buttons: ['Отменить', true],
      });
    },
  },
};
