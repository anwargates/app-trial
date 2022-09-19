class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
        <div class="card">
          <img class="card-img-top" src="${this.image}" alt="${this.manufacture}"/>
            <div class="card-body">
              <p class="card-title">${this.manufacture}/${this.model}</p>
              <h3 class="card-price">${this.rentPerDay}</h3>
              <p class="card-caption">
                ${this.description}
              </p>
              <p class="card-caption">
                <i class="bx bx-time-five" alt="icon-clock"></i>
                Updated at 4 Apr 2022, 09.00
              </p>
            </div>
            <div class="button-group card-body card-body-button d-flex justify-content-center">
              <button type="button" class="btn btn-primary card-body-button"
                >
                <a class="font-weight-bold">Pilih Mobil</a>
              </button>
            </div>
        </div>
      `;
  }
}
