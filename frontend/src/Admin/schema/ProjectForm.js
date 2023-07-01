import * as yup from "yup";

export const ProjectSchema = yup.object().shape({
  image: yup.string().required(),
  category: yup.string().required(),
});
