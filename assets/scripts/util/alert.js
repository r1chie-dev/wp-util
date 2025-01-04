class Alert {

    defaultCloseTime = 500;

    alertMessages   = {
        noID: {
            title:      "NO ID INSERTED",
            message:    "Please insert a valid post id"
        },
        openLink: {
            title: "OPENING LINK",
            message: "The link will open in <b></b> milliseconds"
        }
    }

    defaultAlert( messageType, type ) {
        Swal.fire({
            icon:       type,
            title:      this.alertMessages[messageType].title,
            text:       this.alertMessages[messageType].message,
            heightAuto: false,
        });
    }

    autoClose( messageType, callback, timer = this.defaultCloseTime ) {
        let timerInterval;

        Swal.fire({
            title:              this.alertMessages[messageType].title,
            html:               this.alertMessages[messageType].message,
            timer:              timer,
            timerProgressBar:   true,
            heightAuto:         false,
            didOpen: () => {
                Swal.showLoading();

                const timer = Swal.getPopup().querySelector("b");

                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
                callback();
            }
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
              callback();
            }
          });

    }
}