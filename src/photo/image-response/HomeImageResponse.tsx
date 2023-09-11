import { Photo } from '..';
import PhotoGridImageResponse from './PhotoGridImageResponse';

export default function HomeImageResponse({
  photos,
  request,
  width,
  height,
  fontFamily,
}: {
  photos: Photo[]
  request: Request
  width: number
  height: number
  fontFamily: string
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      background: 'transparent',
      width,
      height,
      fontFamily,
    }}>
      <PhotoGridImageResponse {...{
        photos,
        request,
        colCount: 4,
        rowCount: 3,
        width,
        height,
      }} />
    </div>
  );
}