using System.Threading.Tasks;
using ProAgil.WebAPI.Model;

namespace ProAgil.WebAPI.Data
{
    public interface IProAgilRepository
    {
        //Geral
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;

        Task<bool> SaveChangesAsync();

        //Eventos
        Task<Evento[]> GetAllEventosAsyncByTema(string tema);
        Task<Evento[]> GetAllEventosAsync();
        Task<Evento> GetEventosAsyncById(int EventoId);
    }
}