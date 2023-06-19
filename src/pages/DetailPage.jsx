import CompetitionHeader from "../components/competitions/competition-detail/competition-header/CompetitionHeader";
import CompetitionSeasons from "../components/competitions/competition-detail/competition-seasons/CompetitionSeasons";
import PageLayout from "../components/layout/page-layout/PageLayout";

export default function DetailPage() {
  return (
    <PageLayout>
      <CompetitionHeader />
      <CompetitionSeasons />
    </PageLayout>
  )
}
