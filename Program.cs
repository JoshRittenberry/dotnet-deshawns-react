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
    new Dog { Id = 1, Name = "Buddy", WalkerId = 7, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/basenji/n02110806_3135.jpg" },
    new Dog { Id = 2, Name = "Bella", WalkerId = 4, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/african/n02116738_5338.jpg" },
    new Dog { Id = 3, Name = "Charlie", WalkerId = 6, CityId = 5, PictureURL = "https://images.dog.ceo/breeds/setter-gordon/n02101006_1551.jpg" },
    new Dog { Id = 4, Name = "Daisy", WalkerId = 1, CityId = 2, PictureURL = "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_6567.jpg" },
    new Dog { Id = 5, Name = "Max", WalkerId = 9, CityId = 2, PictureURL = "https://images.dog.ceo/breeds/terrier-patterdale/320px-05078045_Patterdale_Terrier.jpg" },
    new Dog { Id = 6, Name = "Lucy", WalkerId = 5, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/chihuahua/n02085620_2981.jpg" },
    new Dog { Id = 7, Name = "Bailey", WalkerId = 1, CityId = 4, PictureURL = "https://images.dog.ceo/breeds/newfoundland/n02111277_7395.jpg" },
    new Dog { Id = 8, Name = "Molly", WalkerId = 5, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/labrador/n02099712_719.jpg" },
    new Dog { Id = 9, Name = "Coco", WalkerId = 8, CityId = 5, PictureURL = "https://images.dog.ceo/breeds/komondor/n02105505_4351.jpg" },
    new Dog { Id = 10, Name = "Ruby", WalkerId = 4, CityId = 4, PictureURL = "https://images.dog.ceo/breeds/buhund-norwegian/hakon3.jpg" },
    new Dog { Id = 11, Name = "Rocky", WalkerId = 8, CityId = 5, PictureURL = "https://images.dog.ceo/breeds/beagle/n02088364_1128.jpg" },
    new Dog { Id = 12, Name = "Sadie", WalkerId = 6, CityId = 5, PictureURL = "https://images.dog.ceo/breeds/mastiff-bull/n02108422_1546.jpg" },
    new Dog { Id = 13, Name = "Lucky", WalkerId = 8, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/terrier-cairn/n02096177_470.jpg" },
    new Dog { Id = 14, Name = "Maggie", WalkerId = 9, CityId = 4, PictureURL = "https://images.dog.ceo/breeds/spaniel-welsh/n02102177_3603.jpg" },
    new Dog { Id = 15, Name = "Toby", WalkerId = 8, CityId = 5, PictureURL = "https://images.dog.ceo/breeds/sheepdog-shetland/n02105855_15602.jpg" },
    new Dog { Id = 16, Name = "Sophie", WalkerId = 3, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/hound-blood/n02088466_6712.jpg" },
    new Dog { Id = 17, Name = "Jack", WalkerId = 6, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/beagle/n02088364_427.jpg" },
    new Dog { Id = 18, Name = "Lola", WalkerId = 7, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/brabancon/n02112706_2441.jpg" },
    new Dog { Id = 19, Name = "Teddy", WalkerId = 8, CityId = 2, PictureURL = "https://images.dog.ceo/breeds/samoyed/n02111889_1485.jpg" },
    new Dog { Id = 20, Name = "Chloe", WalkerId = 4, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/coonhound/n02089078_3821.jpg" },
    new Dog { Id = 21, Name = "Duke", WalkerId = 6, CityId = 2, PictureURL = "https://images.dog.ceo/breeds/deerhound-scottish/n02092002_12828.jpg" },
    new Dog { Id = 22, Name = "Zoe", WalkerId = 3, CityId = 5, PictureURL = "https://images.dog.ceo/breeds/terrier-norwich/n02094258_1091.jpg" },
    new Dog { Id = 23, Name = "Bear", WalkerId = 7, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/greyhound-italian/n02091032_378.jpg" },
    new Dog { Id = 24, Name = "Lily", WalkerId = 8, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/australian-shepherd/forest.jpg" },
    new Dog { Id = 25, Name = "Oliver", WalkerId = 7, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/puggle/IMG_080306.jpg" },
    new Dog { Id = 26, Name = "Rosie", WalkerId = 4, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/kelpie/n02105412_5373.jpg" },
    new Dog { Id = 27, Name = "Riley", WalkerId = 6, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg" },
    new Dog { Id = 28, Name = "Stella", WalkerId = 8, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/lhasa/n02098413_14264.jpg" },
    new Dog { Id = 29, Name = "Buster", WalkerId = 2, CityId = 5, PictureURL = "https://images.dog.ceo/breeds/terrier-australian/n02096294_7000.jpg" },
    new Dog { Id = 30, Name = "Penny", WalkerId = 6, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/elkhound-norwegian/n02091467_5985.jpg" },
    new Dog { Id = 31, Name = "Murphy", WalkerId = 5, CityId = 1, PictureURL = "https://images.dog.ceo/breeds/beagle/n02088364_10108.jpg" },
    new Dog { Id = 32, Name = "Roxy", WalkerId = 4, CityId = 2, PictureURL = "https://images.dog.ceo/breeds/clumber/n02101556_5167.jpg" },
    new Dog { Id = 33, Name = "Louie", WalkerId = 7, CityId = 2, PictureURL = "https://images.dog.ceo/breeds/shiba/mamehiko02.jpg" },
    new Dog { Id = 34, Name = "Luna", WalkerId = 7, CityId = 3, PictureURL = "https://images.dog.ceo/breeds/ridgeback-rhodesian/n02087394_36.jpg"}
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
