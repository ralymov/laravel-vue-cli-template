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
    confirm(callback, options) {
      options = Object.assign({
        title: 'Are you sure?',
        text: 'Are you sure you want to do that?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Yes',
        closeOnConfirm: false,
      }, options);

      swal(options, callback);
    },
  },
};
