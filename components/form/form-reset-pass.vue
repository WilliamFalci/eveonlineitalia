<template>
    <form @submit.prevent="onSubmit" class="account__form">
        <err-message :msg="errors.email" />
        <div class="form-grp">
            <label for="email">Email</label>
            <Field name="email" v-slot="{ field }">
              <input v-bind="field" type="text" id="email" placeholder="Enter your email"> 
            </Field>
        </div>
        <button type="submit" class="btn mt-15 btn-two arrow-btn">Send mail</button>
    </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  email?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    email: yup.string().required("Email is required").email("Email is invalid"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>