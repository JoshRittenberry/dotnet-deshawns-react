List<City> cities = new List<City>
{
    new City { Id = 1, Name = "Nashville" },
    new City { Id = 2, Name = "Franklin" },
    new City { Id = 3, Name = "Murfreesboro" },
    new City { Id = 4, Name = "Clarksville" },
    new City { Id = 5, Name = "Lebanon" }
};
List<Dog> dogs = new List<Dog>
{
    new Dog { Id = 1, Name = "Buddy", WalkerId = 7, CityId = 3 },
    new Dog { Id = 2, Name = "Bella", WalkerId = 4, CityId = 1 },
    new Dog { Id = 3, Name = "Charlie", WalkerId = 6, CityId = 5 },
    new Dog { Id = 4, Name = "Daisy", WalkerId = 1, CityId = 2 },
    new Dog { Id = 5, Name = "Max", WalkerId = 9, CityId = 2 },
    new Dog { Id = 6, Name = "Lucy", WalkerId = 5, CityId = 3 },
    new Dog { Id = 7, Name = "Bailey", WalkerId = 1, CityId = 4 },
    new Dog { Id = 8, Name = "Molly", WalkerId = 5, CityId = 1 },
    new Dog { Id = 9, Name = "Coco", WalkerId = 8, CityId = 5 },
    new Dog { Id = 10, Name = "Ruby", WalkerId = 4, CityId = 4 },
    new Dog { Id = 11, Name = "Rocky", WalkerId = 8, CityId = 5 },
    new Dog { Id = 12, Name = "Sadie", WalkerId = 6, CityId = 5 },
    new Dog { Id = 13, Name = "Lucky", WalkerId = 8, CityId = 3 },
    new Dog { Id = 14, Name = "Maggie", WalkerId = 9, CityId = 4 },
    new Dog { Id = 15, Name = "Toby", WalkerId = 8, CityId = 5 },
    new Dog { Id = 16, Name = "Sophie", WalkerId = 3, CityId = 3 },
    new Dog { Id = 17, Name = "Jack", WalkerId = 6, CityId = 1 },
    new Dog { Id = 18, Name = "Lola", WalkerId = 7, CityId = 3 },
    new Dog { Id = 19, Name = "Teddy", WalkerId = 8, CityId = 2 },
    new Dog { Id = 20, Name = "Chloe", WalkerId = 4, CityId = 1 },
    new Dog { Id = 21, Name = "Duke", WalkerId = 6, CityId = 2 },
    new Dog { Id = 22, Name = "Zoe", WalkerId = 3, CityId = 5 },
    new Dog { Id = 23, Name = "Bear", WalkerId = 7, CityId = 1 },
    new Dog { Id = 24, Name = "Lily", WalkerId = 8, CityId = 3 },
    new Dog { Id = 25, Name = "Oliver", WalkerId = 7, CityId = 1 },
    new Dog { Id = 26, Name = "Rosie", WalkerId = 4, CityId = 3 },
    new Dog { Id = 27, Name = "Riley", WalkerId = 6, CityId = 3 },
    new Dog { Id = 28, Name = "Stella", WalkerId = 8, CityId = 1 },
    new Dog { Id = 29, Name = "Buster", WalkerId = 2, CityId = 5 },
    new Dog { Id = 30, Name = "Penny", WalkerId = 6, CityId = 3 },
    new Dog { Id = 31, Name = "Murphy", WalkerId = 5, CityId = 1 },
    new Dog { Id = 32, Name = "Roxy", WalkerId = 4, CityId = 2 },
    new Dog { Id = 33, Name = "Louie", WalkerId = 7, CityId = 2 },
    new Dog { Id = 34, Name = "Luna", WalkerId = 7, CityId = 3 }
};
List<Walker> walkers = new List<Walker>
{
    new Walker { Id = 1, FirstName = "John", LastName = "Doe" },
    new Walker { Id = 2, FirstName = "Jane", LastName = "Doe" },
    new Walker { Id = 3, FirstName = "Alice", LastName = "Smith" },
    new Walker { Id = 4, FirstName = "Bob", LastName = "Johnson" },
    new Walker { Id = 5, FirstName = "Carol", LastName = "Williams" },
    new Walker { Id = 6, FirstName = "David", LastName = "Brown" },
    new Walker { Id = 7, FirstName = "Eva", LastName = "Davis" },
    new Walker { Id = 8, FirstName = "Frank", LastName = "Miller" },
    new Walker { Id = 9, FirstName = "Grace", LastName = "Wilson" }
};
List<WalkerCity> walkerCities = new List<WalkerCity>
{
    new WalkerCity { Id = 1, CityId = 1, WalkerId = 1 },
    new WalkerCity { Id = 2, CityId = 4, WalkerId = 1 },
    new WalkerCity { Id = 3, CityId = 5, WalkerId = 1 },
    new WalkerCity { Id = 4, CityId = 2, WalkerId = 1 },
    new WalkerCity { Id = 5, CityId = 5, WalkerId = 2 },
    new WalkerCity { Id = 6, CityId = 1, WalkerId = 3 },
    new WalkerCity { Id = 7, CityId = 2, WalkerId = 3 },
    new WalkerCity { Id = 8, CityId = 3, WalkerId = 3 },
    new WalkerCity { Id = 9, CityId = 4, WalkerId = 3 },
    new WalkerCity { Id = 10, CityId = 5, WalkerId = 4 },
    new WalkerCity { Id = 11, CityId = 1, WalkerId = 4 },
    new WalkerCity { Id = 12, CityId = 3, WalkerId = 4 },
    new WalkerCity { Id = 13, CityId = 1, WalkerId = 5 },
    new WalkerCity { Id = 14, CityId = 5, WalkerId = 6 },
    new WalkerCity { Id = 15, CityId = 2, WalkerId = 6 },
    new WalkerCity { Id = 16, CityId = 3, WalkerId = 6 },
    new WalkerCity { Id = 17, CityId = 1, WalkerId = 7 },
    new WalkerCity { Id = 18, CityId = 3, WalkerId = 7 },
    new WalkerCity { Id = 19, CityId = 4, WalkerId = 8 },
    new WalkerCity { Id = 20, CityId = 1, WalkerId = 8 },
    new WalkerCity { Id = 21, CityId = 3, WalkerId = 8 },
    new WalkerCity { Id = 22, CityId = 5, WalkerId = 9 },
    new WalkerCity { Id = 23, CityId = 1, WalkerId = 9 }
};

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Get Methods
app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/dogs", () =>
{
    return dogs.Select(d =>
    {
        var walker = walkers.FirstOrDefault(w => w.Id == d.WalkerId);
        var walkerCityObjsWALKER = walker != null ? walkerCities
            .Where(wc => wc.WalkerId == walker.Id)
            .Select(wc => new WalkerCityDTO
            {
                Id = wc.Id,
                CityId = wc.CityId,
                WalkerId = wc.WalkerId
            })
            .ToList() : null;
        var city = cities.FirstOrDefault(c => c.Id == d.CityId);
        var walkerCityObjsCITY = city != null ? walkerCities
            .Where(wc => wc.CityId == city.Id)
            .Select(wc => new WalkerCityDTO
            {
                Id = wc.Id,
                CityId = wc.CityId,
                WalkerId = wc.WalkerId
            })
            .ToList() : null;

        return new DogDTO
        {
            Id = d.Id,
            Name = d.Name,
            WalkerId = d.WalkerId,
            Walker = walker != null ? new WalkerDTO
            {
                Id = walker.Id,
                FirstName = walker.FirstName,
                LastName = walker.LastName,
                WalkerCities = walkerCityObjsWALKER
            } : null,
            CityId = d.CityId,
            City = city != null ? new CityDTO
            {
                Id = city.Id,
                Name = city.Name,
                WalkerCities = walkerCityObjsCITY
            } : null,
            PictureURL = d.PictureURL
        };
    });
});

app.MapGet("/api/walkers", () =>
{
    return walkers.Select(w =>
    {
        var walkerCityObjs = walkerCities
            .Where(wc => wc.WalkerId == w.Id)
            .Select(wc => new WalkerCityDTO
            {
                Id = wc.Id,
                CityId = wc.CityId,
                WalkerId = wc.WalkerId
            })
            .ToList();

        return new WalkerDTO
        {
            Id = w.Id,
            FirstName = w.FirstName,
            LastName = w.LastName,
            WalkerCities = walkerCityObjs
        };
    });
});

app.MapGet("/api/cities", () =>
{
    return cities.Select(c =>
    {
        var walkerCityObjs = walkerCities
            .Where(wc => wc.CityId == c.Id)
            .Select(wc => new WalkerCityDTO
            {
                Id = wc.Id,
                CityId = wc.CityId,
                WalkerId = wc.WalkerId
            })
            .ToList();

        return new CityDTO
        {
            Id = c.Id,
            Name = c.Name,
            WalkerCities = walkerCityObjs
        };
    });
});

app.MapGet("/api/cities/{id}", (int id) =>
{
    City city = cities.FirstOrDefault(c => c.Id == id);
    var walkerCityObjs = walkerCities
        .Where(wc => wc.CityId == id)
        .Select(wc => new WalkerCityDTO
        {
            Id = wc.Id,
            CityId = wc.CityId,
            WalkerId = wc.WalkerId
        })
        .ToList()
        ;

    return Results.Ok(new CityDTO
    {
        Id = city.Id,
        Name = city.Name,
        WalkerCities = walkerCityObjs
    });
});

// Post Methods
app.MapPost("/api/cities", (City city) =>
{
    city.Id = cities.Max(c => c.Id) + 1;
    cities.Add(city);

    return Results.Created($"/cities/{city.Id}", new CityDTO
    {
        Id = city.Id,
        Name = city.Name
    });

});

app.MapPost("/api/dogs", (Dog dog) =>
{
    dog.Id = dogs.Max(d => d.Id) + 1;
    dogs.Add(dog);

    Walker WalkerObj = walkers.FirstOrDefault(w => w.Id == dog.WalkerId);

    City CityObj = cities.FirstOrDefault(c => c.Id == dog.CityId);

    return Results.Created($"/dogs/{dog.Id}", new DogDTO
    {
        Id = dog.Id,
        Name = dog.Name,
        WalkerId = dog.WalkerId,
        Walker = WalkerObj != null ? new WalkerDTO
        {
            Id = WalkerObj.Id,
            FirstName = WalkerObj.FirstName,
            LastName = WalkerObj.LastName,
            // WalkerCities = walkerCityObjsWALKER
        } : null,
        CityId = dog.CityId,
        City = CityObj != null ? new CityDTO
        {
            Id = CityObj.Id,
            Name = CityObj.Name,
            // WalkerCities = walkerCityObjsCITY
        } : null,
        PictureURL = dog.PictureURL
    });
});

app.Run();
