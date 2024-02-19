import { getCookie } from 'cookies';
import AlertPopup from '../../components/AlertPopup';

export default function Success() {
  const cookie = getCookie('status', { parse: true });

  return (
    <div>
      <h1>Payment successfull</h1>
      {cookie && <AlertPopup message="Payment success" />}
    </div>
  );
}