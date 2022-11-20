import { useState } from 'react'
import { formatDistanceToNow } from 'date-fns'
import enUS from 'date-fns/esm/locale/en-US'

import { Header } from '../../components/Header'

import {
  MagnifyingGlass,
  MapPin,
  TwitterLogo,
  Link,
  Buildings,
} from 'phosphor-react'

import {
  Container,
  ProfileContainer,
  RighSideBioUser,
  RighSideInfoContainer,
  RighSideInfoContent,
  RighSideInfoUser,
  RightSide,
  RightSideFooter,
  RightSideFooterInfo,
  SearchContainer,
} from './styles'
import api from '../../config/api'

type UserInfoGithubProps = {
  avatar_url: string
  name: string
  login: string
  created_at: string
  bio: string
  public_repos: number
  followers: number
  following: number
  location: string
  twitter_username: string
  company?: string
  html_url: string
}

export function Home() {
  const [userInfoGithub, setUserInfoGithub] = useState<UserInfoGithubProps>()
  const [searchProfileName, setSearchProfileName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmitProfile() {
    try {
      if (!searchProfileName) {
        alert('Digite qual usuário deseja procurar!')
      }

      const json = await api.getUserGithub(searchProfileName)
      setUserInfoGithub(() => json)
      setSearchProfileName('')

      setIsLoading(true)
    } catch (e) {
      console.log('Tente novamente mais tarde!')
    }
  }

  return (
    <Container>
      <Header />

      <SearchContainer>
        <MagnifyingGlass size={24} />
        <input
          type="text"
          required
          placeholder="Search GitHub username..."
          onChange={(event) => setSearchProfileName(event.target.value)}
          value={searchProfileName}
        />
        <button onClick={handleSubmitProfile}>Search</button>
      </SearchContainer>

      {isLoading ? (
        <ProfileContainer>
          <img src={userInfoGithub?.avatar_url} alt="" />
          <RightSide>
            <RighSideInfoUser>
              <h1>{userInfoGithub?.name}</h1>
              <span>
                Joined{' '}
                {formatDistanceToNow(new Date(userInfoGithub!.created_at), {
                  addSuffix: true,
                  locale: enUS,
                })}
              </span>
            </RighSideInfoUser>
            <a href={userInfoGithub?.html_url} target="_blank" rel="noreferrer">
              @{userInfoGithub?.login}
            </a>

            <RighSideBioUser>{userInfoGithub?.bio}</RighSideBioUser>

            <RighSideInfoContainer>
              <RighSideInfoContent>
                <span>Repos</span>
                <strong>{userInfoGithub?.public_repos}</strong>
              </RighSideInfoContent>

              <RighSideInfoContent>
                <span>Followers</span>
                <strong>{userInfoGithub?.followers}</strong>
              </RighSideInfoContent>

              <RighSideInfoContent>
                <span>Following</span>
                <strong>{userInfoGithub?.following}</strong>
              </RighSideInfoContent>
            </RighSideInfoContainer>

            <RightSideFooter>
              <RightSideFooterInfo>
                <MapPin size={18} weight="fill" />
                {userInfoGithub?.location}
              </RightSideFooterInfo>

              {userInfoGithub!.twitter_username ? (
                <RightSideFooterInfo>
                  <TwitterLogo size={18} weight="fill" />
                  {userInfoGithub!.twitter_username}
                </RightSideFooterInfo>
              ) : (
                <RightSideFooterInfo variant="gray">
                  <TwitterLogo size={18} weight="fill" />
                  Not Available
                </RightSideFooterInfo>
              )}

              {userInfoGithub?.html_url ? (
                <RightSideFooterInfo>
                  <Link size={18} weight="bold" />
                  {userInfoGithub?.name}
                </RightSideFooterInfo>
              ) : (
                <RightSideFooterInfo variant="gray">
                  <Link size={18} weight="bold" />
                  Not Available
                </RightSideFooterInfo>
              )}

              {userInfoGithub?.company ? (
                <RightSideFooterInfo>
                  <Buildings size={18} weight="fill" />
                  {userInfoGithub?.company}
                </RightSideFooterInfo>
              ) : (
                <RightSideFooterInfo variant="gray">
                  <Buildings size={18} weight="fill" />
                  Not Available
                </RightSideFooterInfo>
              )}
            </RightSideFooter>
          </RightSide>
        </ProfileContainer>
      ) : null}
    </Container>
  )
}
