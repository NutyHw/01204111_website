<template>
  <v-dialog 
    v-model="confirmation" 
    persistent 
    width="auto"
    height="auto"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    >
    <v-card 
      v-if="confirmation & (timer > 0)"
      >
      <v-card-title class="headline">
        <p class="ma-0 py-4">
          <b>
            โปรดยืนยันว่าต้องการสิ้นสุดการทดสอบ
          </b>
        </p>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <div class="subtitle-1">
          <p class="ma-0 pa-0">
            หากผู้ทำการทดสอบแน่ใจว่าต้องการสิ้นสุดการทดสอบ กรุณากดปุ่ม
            <b>ยืนยัน</b> เพื่อสิ้นสุดการทดสอบ หรือกดปุ่ม <b>ยกเลิก</b>
            เพื่อกลับไปทำการทดสอบต่อ
          </p>
          <v-checkbox
            label="ผู้ทำการทดสอบได้อ่าน และเข้าใจแล้ว"
            v-model="confirmation_value"
          ></v-checkbox>
        </div>
      </v-card-text>

      <v-card-actions>
        <!-- <v-spacer></v-spacer> -->
        <v-container fluid>
          <v-row>
            <v-col cols="6">
              <v-btn class="ma-0 pa-0" color="error" block @click="cancle">
                ยกเลิก
              </v-btn>
            </v-col>
            <!-- <v-spacer></v-spacer> -->
            <v-col cols="6">
              <v-btn
                class="ma-0 pa-0 white--text"
                color="confirm"
                block
                @click="confirm"
                :disabled="!confirmation_value"
              >
                ยืนยัน
              </v-btn>
            </v-col>
          </v-row>
        </v-container>

        <!-- <v-spacer></v-spacer> -->
      </v-card-actions>
    </v-card>

    <v-card v-if="timer <= 0">
      <v-card-title class="headline py-6">
        <p class="ma-0 pa-0">
          การทดสอบสิ้นสุด
        </p>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text class="title mt-6">
        <p class="ma-0 pa-0">
          เนื่องจากผู้ทำการทดสอบได้ทำการทดสอบจนครบกำหนด 2 ชั่วโมงแล้วกรุณากดปุ่ม
          <b>ยืนยัน</b> เพื่อสิ้นสุดการทดสอบ
        </p>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="confirm white--text" block @click="confirm">
          ยืนยัน
        </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "mydialog",
  props: {
    timer: Number,
    confirmation: Boolean,
  },
  data: () => ({
    confirmation_value: false,
  }),
  methods: {
    cancle() {
      this.confirmation_value = false;
      this.$emit("cancle");
    },
    confirm() {
      this.$emit("confirm");
    },
  },
};
</script>

<style scoped></style>
