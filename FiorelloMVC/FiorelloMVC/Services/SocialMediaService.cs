using FiorelloMVC.Data;
using FiorelloMVC.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace FiorelloMVC.Services
{
    public class SocialMediaService : ISocialMediaService
    {
        private readonly AppDBContext _context;
        public SocialMediaService(AppDBContext context)
        {
            _context = context;
        }
        
        public async Task<Dictionary<string, string>> GetAllAsync()
        {
            return await _context.SocialMedias.ToDictionaryAsync(m => m.Name, m => m.Url);
        }
    }
}
