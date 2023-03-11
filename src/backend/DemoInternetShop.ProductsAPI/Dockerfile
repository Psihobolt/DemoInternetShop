FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["DemoInternetShop.ProductsAPI/DemoInternetShop.ProductsAPI.csproj", "DemoInternetShop.ProductsAPI/"]
RUN dotnet restore "DemoInternetShop.ProductsAPI/DemoInternetShop.ProductsAPI.csproj"
COPY . .
WORKDIR "/src/DemoInternetShop.ProductsAPI"
RUN dotnet build "DemoInternetShop.ProductsAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "DemoInternetShop.ProductsAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "DemoInternetShop.ProductsAPI.dll"]
