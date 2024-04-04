import Footer from "@/components/sharing/Footer";
import { useEffect, useState } from "react";
import { getSampleFolder, getUser } from "@/utils/api";
import SearchInputForm from "@/components/folder/input/SearchInputForm";
import CardList from "@/components/folder/card/CardList";
import UserProfile from "@/components/sharing/user/UserProfile";
import FolderHeaderLayout from "@/components/folder/layout/FolderHeaderLayout";
import MainLayout from "@/components/folder/layout/MainLayout";
import styled from "styled-components";
import { TSampleFolder, TUser } from "@/utils/types";
import Header from "@/components/sharing/Header";

export async function getServerSideProps() {
  const res = await getSampleFolder();
  const folderInfo = res;

  return {
    props: {
      folderInfo,
    },
  };
}

const FolderOwner = styled(UserProfile)`
  flex-direction: column;
`;

const Index = ({ folderInfo }: { folderInfo: TSampleFolder }) => {
  const [user, setUser] = useState<TUser>();
  const loadUser = async () => {
    const userInfo = await getUser();
    const { email, image_source } = userInfo;
    if (userInfo) setUser({ email, image_source });
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <>
      <Header userInfo={user} fixed={true} />
      <div className="component-default-margin">
        <FolderHeaderLayout>
          {/*<FolderOwner userInfo={user} size={62} />*/}
          <div className="font-regular font-40px margin-auto">
            {folderInfo?.name}
          </div>
        </FolderHeaderLayout>
        <MainLayout>
          <SearchInputForm />
          <CardList links={folderInfo.links} />
        </MainLayout>
      </div>
      <Footer />
    </>
  );
};
export default Index;
