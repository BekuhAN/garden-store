<template>
  <main class="contacts">
    <div class="page_title">
      <span>Контакты</span>
    </div>
    <div class="container contacts__wrapper">
      <div class="contacts__map">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A1329757830259fbb8f22c6dd7df75c0e0545794ea52d31c66cf2081d6e36eb77&amp;source=constructor"
          width="100%"
          height="400"
          frameborder="0"
        ></iframe>
      </div>

      <div class="contacts__info">
        <div class="row">
          <div class="col-50 contacts__info__detail__wrapper row">
            <div class="col-100 contacts__info__detail">
              <div class="contacts__info__detail__title">Адрес</div>
              <div class="contacts__info__detail__text">
                улица Труда, 243, Краснодар
              </div>
            </div>
            <div class="col-100 contacts__info__detail">
              <div class="contacts__info__detail__title">Почта</div>
              <div class="contacts__info__detail__text">info@garden.ru</div>
            </div>
            <div class="col-100 contacts__info__detail">
              <div class="contacts__info__detail__title">Телефон</div>
              <div class="contacts__info__detail__text">+7 (861) 111-22-33</div>
            </div>
            <div class="col-100 contacts__info__detail">
              <div class="contacts__info__detail__title">Время работы</div>
              <div class="contacts__info__detail__text">
                ПН-СБ: 08:00 - 20:00 <br />
                ВС: Выходной
              </div>
            </div>
            <div class="col-100 contacts__info__detail">
              <div class="contacts__info__detail__title">Соц. сети</div>
              <div class="contacts__info__detail__social">
                <div class="contacts__info__detail__social__item">
                  <a href="https://www.whatsapp.com/"
                    ><Icon icon="fa-brands:whatsapp" width="24" height="24"
                  /></a>
                </div>
                <div class="contacts__info__detail__social__item">
                  <a href="https://telegram.org/"
                    ><Icon
                      icon="fa-brands:telegram-plane"
                      width="24"
                      height="24"
                  /></a>
                </div>
                <div class="contacts__info__detail__social__item">
                  <a href="https://vk.com/"
                    ><Icon icon="fa-brands:vk" width="24" height="24"
                  /></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-50">
            <form class="contacts__form row" @submit.prevent="sendEmail">
              <label for="contacts_name" class="contacts__form__item col-100"
                ><input
                  placeholder="Имя *"
                  required
                  name="contacts_name"
                  type="text" /></label
              ><label for="contacts_phone" class="contacts__form__item col-100">
                <MaskInput
                  mask="+7 (###) ###-##-##"
                  required
                  type="phone"
                  id="contacts_phone"
                  placeholder="Телефон *"
                  name="contacts_phone" /></label
              ><label for="contacts_email" class="contacts__form__item col-100"
                ><input
                  placeholder="Почта *"
                  required
                  name="contacts_email"
                  type="email" /></label
              ><label for="contacts_theme" class="contacts__form__item col-100"
                ><input
                  placeholder="Тема *"
                  required
                  name="contacts_theme"
                  type="text"
              /></label>
              <label class="contacts__form__item message col-100">
                <textarea
                  placeholder="Сообщение *"
                  required
                  name="contacts_message"
                ></textarea>
              </label>
              <input
                class="contacts__form__send btn"
                type="submit"
                value="Отправить сообщение"
              />
              <div class="contacts__form__success" v-if="isSuccess">
                <img src="../assets/success.png" />
              </div>
              <div class="contacts__form__error" v-if="isError">
                <img src="../assets/error.png" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { MaskInput } from "vue-3-mask";
import { Icon } from "@iconify/vue";
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      isSuccess: false,
      isError: false,
    };
  },
  components: {
    MaskInput,
    Icon,
  },
  methods: {
    sendEmail(e) {
      const self = this;
      //bari@temp-inbox.me
      emailjs
        .sendForm(
          "service_ugr2ppb",
          "template_9fdcvo3",
          e.target,
          "cSLzHUrDsodoxzdk5"
        )
        .then(
          (result) => {
            self.isSuccess = true;
            e.target.reset();
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            self.isError = true;
            e.target.reset();
            console.log("FAILED...", error);
          }
        );
    },
  },
  watch: {
    isSuccess: function () {
      const self = this;
      setTimeout(() => {
        self.isSuccess = false;
      }, 2000);
    },
    isError: function () {
      const self = this;
      setTimeout(() => {
        self.isError = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.contacts {
  &__map {
    margin-top: 100px;
  }
  &__info {
    padding: 100px 200px;
    &__detail {
      margin-bottom: 30px;
      &__wrapper {
        height: 100%;
      }
      &__title {
        font-size: 24px;
        margin-bottom: 10px;
      }
      &__text {
        font-size: 14px;
        color: #777;
        line-height: 1.6;
      }
      &__social {
        display: flex;
        gap: 10px;
        &__item {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          border: 1px solid #777;
          line-height: 1;
          transition: 0.3s;
          overflow: hidden;
          position: relative;
          & > a {
            transform: translateY(1.5px);
            line-height: 1;
            position: relative;
          }
          &::before {
            position: absolute;
            transition: 0.3s;
            content: "";
            width: 100%;
            height: 0;
            bottom: 0;
            left: 0;
            z-index: -1;
            background: $main-color;
          }
          &:hover {
            border-color: transparent;
            svg path {
              fill: #fff;
            }
            &::before {
              height: 100%;
            }
          }
          img {
            width: 100%;
          }
        }
      }
    }
  }
  &__form {
    position: relative;
    font-size: 14px;
    color: #777;
    &__item {
      position: relative;
      margin-bottom: 15px;
      input,
      textarea {
        padding-left: 30px;
        line-height: 1;
        padding: 30px 25px;
        width: 100%;
        max-width: 100%;
        min-width: 100%;
        height: 40px;
        border: 1px solid #ebebeb;
        outline: none;
        font-family: $font-text;
      }
      textarea {
        height: 200px;
        max-height: 200px;
        min-height: 200px;
        padding-top: 20px;
      }
      &.message {
        height: 200px;
      }
    }
    &__send {
      background: $main-color;
      margin-top: 15px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      display: inline-block;
      padding: 15px 30px;
      transition: 0.5s;
      border: none;
      cursor: pointer;
      &:hover {
        background: #222;
      }
    }
    &__success,
    &__error {
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(#fff, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100px;
      }
    }
  }
}
</style>
