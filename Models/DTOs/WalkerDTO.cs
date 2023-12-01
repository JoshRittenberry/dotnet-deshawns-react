public class WalkerDTO
{
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Name
    {
        get
        {
            string name = null;
            if (FirstName != null && LastName != null)
            {
                name = FirstName + " " + LastName;
            }
            return name;
        }
    }
    public List<WalkerCityDTO> WalkerCities { get; set; }
}