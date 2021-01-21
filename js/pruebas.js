function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos un caracter.",
    "Validar nombre no validó que el nombre no sea vacío"
  );

  console.assert(
    validarNombre(
      "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Este campo debe tener menos de 50 caracteres.",
    "Validar nombre no validó que el nombre sea menor a 50 caracteres"
  );
}

function probarValidarCiudad() {
  console.assert(
    validarCiudad("") === "El campo ciudad no puede estar vacío.",

    "Validar ciudad no validó que 'ciudad' no sea un campo vacío."
  );
}

function probarValidarComportamiento() {
  console.assert(
    validarComportamiento("") ===
      "El campo comportamiento no puede estar vacío.",
    "Validar comportamiento no validó que 'comportamiento' no sea un campo vacío."
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") ===
      "El campo descripción regalo no puede estar vacío.",
    "Validar descripción regalo no validó que el campo regalo no esté vacío."
  );

  console.assert(
    validarDescripcionRegalo("aaa") ===
      "El campo descripción debería tener al menos 5 caracteres.",
    "Validar descripción regalo no validó que el campo regalo no tenga menos de 5 caracteres."
  );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarComportamiento();
probarValidarDescripcionRegalo();
