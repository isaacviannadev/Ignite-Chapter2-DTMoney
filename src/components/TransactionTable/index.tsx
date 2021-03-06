import { Container } from './style';

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className='income'>R$12.000 </td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className='outcome'>-R$1.100 </td>
            <td>Casa</td>
            <td>15/02/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
