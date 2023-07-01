import * as yup from "yup";

export const CourseSchema = yup.object().shape({
  image: yup.string().required(),
  price: yup.number().required(),
  title: yup.string().required(),
  category: yup.string().required(),
});
