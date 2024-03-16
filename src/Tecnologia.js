import { promises as fileSystem } from "fs";

export default class Tecnologia {
  static id = 0;

  constructor() {
    this.path = "./Tecnologia.json";
    this.tecnologia = [];
    this.loadTecnologia();
  }

  // Método para cargar los productos desde el archivo al iniciar
  async loadTecnologia() {
    try {
        const data = await fileSystem.readFile(this.path, "utf-8");
        this.tecnologia = JSON.parse(data);
    } catch (error) {
        console.error("Error al cargar la tecnología:", error);
    }
}


  // Método para crear los productos
  async createTecnologia(nombre, descripcion, precio, imagen, codigo, cantidad) {
    Tecnologia.id++;
    const cod = tecnoCode => tecnoCode.codigo === codigo;
    let producto = { id: Tecnologia.id, nombre, descripcion, precio, imagen, codigo, cantidad };

    if (this.tecnologia.some(cod)) {
      console.warn(`\n El producto con el código ${codigo} ya se encuentra registrado... \n`);
      return;
    }

    if (!nombre || !descripcion || !precio || !imagen || !codigo || !cantidad) {
      console.warn("ERROR: Todos los campos deben ser completados");
      return;
    }

    this.tecnologia.push(producto);
    console.log(producto);
    await this.saveTecnologia();
  }

  // Método para guardar los productos en el archivo
  async saveTecnologia() {
    try {
        await fileSystem.writeFile(this.path, JSON.stringify(this.tecnologia, null, 2));
    } catch (error) {
        console.error("Error al guardar la tecnología:", error);
    }
}

  // Método para obtener los productos
  getTecnologia() {
    return [...this.tecnologia]; // Devolver una copia de la tecnología para evitar modificaciones directas
  }
}

// Crear una instancia de la clase Tecnologia
const prod = new Tecnologia();

// Crear los productos
prod.createTecnologia(
  "Monitor Philips",
  "Monitor Philips 221v8/77 21,5'' Full Hd 75 Hz Lcd 4 Ms Color Negro",
  142.799,
  "./public/img/MonitorPhilips.png",
  "pro1",
  15
);

prod.createTecnologia(
  "Monitor Gamer Aoc",
  "Monitor Gamer Aoc 24 Fhd G2490vx 144hz 1ms Amd Freesync Color Negro",
  289919,
  "./public/img/MonitorGamerAoc.png",
  "pro2",
  25
);

prod.createTecnologia(
  "Notebook Hp",
  "Notebook Hp 14-em0007la Ryzen 3 8gb Ram 512gb Windows 11 Color Dorado",
  765999,
  "./public/img/NotebookHp.png",
  "pro3",
  30
);

prod.createTecnologia(
  "Notebook Dell",
  "Notebook Dell Inspiron 3525 plata 15.5 AMD Ryzen 5 5500U 8GB de RAM 512GB SSD, AMD Radeon RX Vega 7 120 Hz 1920x1080px Windows 11 Home",
  699999,
  "./public/img/NotebookDell.png",
  "pro4",
  23
);

prod.createTecnologia(
  "Mouse Hyperx",
  "Mouse Hyperx Pulsefire Haste 2 Wireless (6n0b0aa) - Wh",
  95.990,
  "./public/img/MouseHyperx.png",
  "pro5",
  56
);

prod.createTecnologia(
  "Teclado Redragon",
  "Teclado gamer Redragon Kumara K552 QWERTY Outemu Blue español latinoamérica color blanco con luz RGB",
  49.637,
  "./public/img/TecladoRedragon.png",
  "pro6",
  12
);

prod.createTecnologia(
  "Auriculares JBL",
  "Auriculares inalámbricos JBL Tune 510BT JBLT510BT negro",
  59.859,
  "./public/img/AuricularesJBL.png",
  "pro7",
  50
);

prod.createTecnologia(
  "Notebook Banghó",
  "Notebook Banghó MAX L5 i7 gris oscura 15.6 Intel Core i7 1165G7 16GB de RAM 480GB SSD, Intel Graphics UHD 620 60 Hz 1920x1080px FreeDOS",
  823.999,
  "./public/img/NotebookBanghó.png",
  "pro8",
  10
);

prod.createTecnologia(
  "Monitor Gigabyte",
  "Monitor gamer Gigabyte G24F 2 LCD 23.8 negro 100V/240V",
  304.676,
  "./public/img/MonitorGigabyte.png",
  "pro9",
  21
);

prod.createTecnologia(
  "Parlante JBL",
  "Parlante Jbl Go Essential Portátil Bluetooth Waterproof Azul",
  47.999,
  "./public/img/ParlanteJBL.png",
  "pro10",
  15
);
