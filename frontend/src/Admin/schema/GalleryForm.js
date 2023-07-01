import * as yup from "yup";

export const GallerySchema = yup.object().shape({
  image: yup.string().required(),
});
