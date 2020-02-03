import React from 'react';

export default function UserProfile ({initialState}) {
    return (
        <div>
      <UserHeader />
      <WideBody>
        <Nav />
        <BodyContainerColumn>
          <RowHead>
            <H3>Your Profile</H3>
          </RowHead>

          <RowBody>
                        
          </RowBody>
        </BodyContainerColumn>
      </WideBody>
      <Footer />
    </div>

    );
}