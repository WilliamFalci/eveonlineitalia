<template>
    <form @submit.prevent="onSubmit" class="account__form">
        <div class="row gutter-20">
            <div class="col-md-6">
                <err-message :msg="errors.fname" />
                <div class="form-grp">
                    <label for="fast-name">First Name</label>
                    <Field name="fname" v-slot="{ field }">
                        <input v-bind="field" type="text" id="fast-name" placeholder="First Name">
                    </Field>
                </div>
            </div>
            <div class="col-md-6">
                <err-message :msg="errors.lname" />
                <div class="form-grp">
                    <label for="last-name">Last name</label>
                    <Field name="lname" v-slot="{ field }">
                      <input v-bind="field" type="text" id="last-name" placeholder="Last name">
                    </Field>
                </div>
            </div>
        </div>

        <err-message :msg="errors.email" />
        <div class="form-grp">
            <label for="email">Email</label>
            <Field name="email" v-slot="{ field }">
              <input v-bind="field" type="email" id="email" placeholder="email">
            </Field>
        </div>

        <err-message :msg="errors.password" />
        <div class="form-grp">
            <label for="password">Password</label>
            <Field name="password" v-slot="{ field }">
              <input v-bind="field" type="password" id="password" placeholder="password">
            </Field>
        </div>

        <err-message :msg="errors.cpassword" />
        <div class="form-grp">
            <label for="confirm-password">Confirm Password</label>
            <Field name="cpassword" v-slot="{ field }">
              <input v-bind="field" type="password" id="confirm-password" placeholder="Confirm Password">
            </Field>
        </div>
        <button type="submit" class="btn btn-two arrow-btn">Sign Up</button>
    </form>
</template>

<script setup lang="ts">
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

interface IFormValues {
  fname?: string | null;
  lname?: string | null;
  email?: string | null;
  password?: string | null;
  cpassword?: string | null;
}

const { errors, handleSubmit, resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    fname: yup.string().required("First Name is required"),
    lname: yup.string().required("Last Name is required"),
    email: yup.string().required("Email is required").email("Email is invalid"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    cpassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  }),
});

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
  resetForm();
});
</script>