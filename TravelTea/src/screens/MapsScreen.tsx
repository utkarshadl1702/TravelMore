import { PageFrame } from '../components/PageFrame';

type MapsScreenProps = {
  onPressProfile: () => void;
};

export function MapsScreen({ onPressProfile }: MapsScreenProps) {
  return <PageFrame title="Maps" onPressProfile={onPressProfile} />;
}
