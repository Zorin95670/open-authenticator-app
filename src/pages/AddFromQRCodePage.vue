<template>
  <q-page class="flex column content-center justify-start">
    <h4 class="text-center">{{ $t('label.title.fromQRCode') }}</h4>
    <div v-if="showCamera">
      <qrcode-stream
        :camera="camera"
        @decode="onDecode"
        @init="onInit"/>
    </div>
    <div class="row justify-center q-pt-lg">
      <q-btn
        class="q-ml-sm"
        color="primary"
        icon="camera_alt"
        :label="$t('action.readQR')"
        @click="turnCameraOn()"
        v-show="!showCamera"/>
      <q-btn
        flat class="q-ml-sm"
        :label="$t('action.cancel')"
        color="primary"
        @click="$router.push('/')"/>
    </div>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="qr_code" color="primary" text-color="white" />
          <span class="q-ml-sm">
            {{ $t('label.explanation.add.token', { issuer: totp.issuer }) }}
          </span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            flat
            :label="$t('action.cancel')"
            color="primary"
            v-close-popup />
          <q-btn
            flat
            :label="$t('action.add')"
            color="primary"
            @click="registerOtp"
            v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader/src/index';
import * as OTPAuth from 'otpauth';

export default {
  name: 'AddFromQRCodePage',
  components: { QrcodeStream },
  data() {
    return {
      isValid: undefined,
      camera: 'auto',
      result: null,
      showCamera: false,
      totp: null,
      confirm: false,
    };
  },
  methods: {
    async onDecode(content) {
      this.totp = OTPAuth.URI.parse(content);
      this.confirm = true;
      this.turnCameraOff();
    },
    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        this.$q.notify({
          type: 'negative',
          message: this.$t(`error.camera.${error.name}`),
        });
      }
    },
    registerOtp() {
      this.confirm = false;
      this.$store.dispatch('authToken/createAuthToken', {
        name: this.totp.issuer,
        secret: this.totp.secret.base32,
      }).then(() => this.$router.push('/'));
    },
    turnCameraOn() {
      this.camera = 'auto';
      this.showCamera = true;
    },
    turnCameraOff() {
      this.camera = 'off';
      this.showCamera = false;
    },
  },
};
</script>
