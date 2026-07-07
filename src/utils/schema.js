import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Пожалуйста, введите ваше имя")
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя слишком длинное")
    .matches(/^[a-zA-Zа-яА-Я\s-]+$/, "Имя может содержать только буквы")
    .trim(),
  
  phone: yup
    .string()
    .required("Пожалуйста, введите номер телефона")
    .test('phone-format', 'Введите полный номер телефона (10 цифр после +7)', function(value) {
      if (!value) return false;
      // Убираем все не цифры
      const cleanValue = value.replace(/\D/g, '');
      // Проверяем что длина 11 и начинается с 7
      return cleanValue.length === 11 && cleanValue.startsWith('7');
    }),
  
  message: yup
    .string()
    .max(500, "Сообщение не должно превышать 500 символов")
    .optional()
    .nullable()
    .transform((value) => value || undefined),
});