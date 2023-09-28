function verificarAprobacion() {
    // Obtener la calificación y el porcentaje de asistencias ingresados por el usuario
    const calificacion = parseFloat(document.getElementById("calificacion").value);
    const asistencias = parseFloat(document.getElementById("asistencias").value);

    // Verificar si la calificación es aprobatoria y el porcentaje de asistencias es mayor o igual al 80%
    if (calificacion >= 60 && asistencias >= 80) {
        document.getElementById("resultado").textContent = "El alumno está aprobado.";
    } else {
        document.getElementById("resultado").textContent = "El alumno está reprobado.";
    }
}
