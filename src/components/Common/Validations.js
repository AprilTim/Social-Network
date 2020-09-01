import React from "react";

export const required = value => (value ? undefined : 'Это обязательное поле!')

export const maxLength = (max) => (value) => value.length > max ? `Email должен быть не больше ${max} символов`
    : undefined