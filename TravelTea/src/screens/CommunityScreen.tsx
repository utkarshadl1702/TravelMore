import { PageFrame } from '../components/PageFrame';

type CommunityScreenProps = {
  onPressProfile: () => void;
};

export function CommunityScreen({ onPressProfile }: CommunityScreenProps) {
  return <PageFrame title="Community" onPressProfile={onPressProfile} />;
}
