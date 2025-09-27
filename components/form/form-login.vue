<template>
    <form @submit.prevent="onSubmit" class="account__form">
        <err-message :msg="errors.email" />
        <div class="form-grp">
            <label for="email">Email</label>
            <field name="email" v-slot="{ field }">
              <input v-bind="field" type="text" id="email" placeholder="email">
            </field>
        </div>

        <err-message :msg="errors.password" />
        <div class="form-grp">
            <label for="password">Password</label>
            <field name="password" v-slot="{ field }">
              <input v-bind="field" type="text" id="password" placeholder="password">
            </field>
        </div>

        <div class="account__check">
            <div class="account__check-remember">
                <input type="checkbox" class="form-check-input" value="" id="terms-check">
                <label for="terms-check" class="form-check-label">Remember me</label>
            </div>
            <div class="account__check-forgot">
                <nuxt-link href="/reset-password">Forgot Password?</nuxt-link>
            </div>
        </div>
        <button type="submit" class="btn btn-two arrow-btn">Login</button>
    </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  email?: string | null;
  password?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>