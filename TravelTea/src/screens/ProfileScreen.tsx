import { PageFrame } from '../components/PageFrame';

type ProfileScreenProps = {
  onPressProfile: () => void;
};

export function ProfileScreen({ onPressProfile }: ProfileScreenProps) {
  return <PageFrame title="Profile" onPressProfile={onPressProfile} />;
}
