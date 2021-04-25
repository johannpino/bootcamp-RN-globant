import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Formulario from "../components/Formulario";

const TiempoDetallado = jest.fn();

test("<TiempoDetallado/> Cargar la coleccion y revisar que todo sea correcto");
