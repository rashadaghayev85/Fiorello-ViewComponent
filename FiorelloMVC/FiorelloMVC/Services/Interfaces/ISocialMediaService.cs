namespace FiorelloMVC.Services.Interfaces
{
    public interface ISocialMediaService
    {
        Task<Dictionary<string, string>> GetAllAsync();
    }
}
